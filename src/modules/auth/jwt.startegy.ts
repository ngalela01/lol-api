import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'SUPER_KEY_JWT', // même clé que dans auth.module.ts
    });
  }

  async validate(payload: any) {
    // Ce que tu retournes ici sera accessible dans req.user
    return { userId: payload.sub, email: payload.email, role: payload.role };
  }
}
