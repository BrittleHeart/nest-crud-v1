import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { AuthService } from "./auth.service";

/**
 * PassportStrategy is required class / interface for creating Passport strategies.
 * To do so, just import that and make strategy extendable.
 */

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(private readonly authService: AuthService) {
        // I need to pass super function, because PassportStrategy has his own constructor implemented
        super();
    }

    /**
     * This function is almost the same the function located in the auth service. But this time, the whole logic is
     * controlled by the strategy
     * 
     * @param username 
     * @param password 
     */
    async validate(username: string, password: string): Promise<any> {
        const user = this.authService.validateUser(username, password);
        if(!user)
            throw new UnauthorizedException()
        
        return user;
    }
}
