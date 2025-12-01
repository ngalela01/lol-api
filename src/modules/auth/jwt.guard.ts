import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class JwtGuard implements CanActivate {
  constructor(private readonly jwtService: JwtService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const method = request.method;
    const url = request.url;

    // Routes publiques
    if (url.includes('/auth/login')) {
      return true;
    }

    
    // Méthodes protégées
    const protectedMethods = ['POST', 'PATCH', 'DELETE', 'PUT'];
    if (!protectedMethods.includes(method)) {
      return true; // GET, OPTIONS → libres
    }

    //RECUPERATION DU TOKEN
    const authHeader =
      request.headers['authorization'] || request.headers['Authorization'];

    if (!authHeader || typeof authHeader !== 'string') {
      throw new UnauthorizedException('Token manquant');
    }

    const [type, token] = authHeader.split(' ');

    if (type !== 'Bearer' || !token) {
      throw new UnauthorizedException('Format de token invalide');
    }

    try {
      const payload = await this.jwtService.verifyAsync(token);

      request.user = payload;
      return true;
    } catch (error) {
      throw new UnauthorizedException('Token invalide ou expiré');
    }
  }
}
