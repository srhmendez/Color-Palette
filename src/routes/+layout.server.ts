import { kindeAuthClient, type SessionManager } from '@kinde-oss/kinde-auth-sveltekit';
import type { RequestEvent } from '@sveltejs/kit';

export async function load({ request }: RequestEvent) {
    let isUserAuthenticated = false;
    let userProfile = null;

    isUserAuthenticated = await kindeAuthClient.isAuthenticated( request as unknown as SessionManager);
    if (isUserAuthenticated) {
        // get user profile
        userProfile = await kindeAuthClient.getUserProfile(request as unknown as SessionManager);
    } else {
        userProfile = null;
    }

    return {
        isUserAuthenticated,
        userProfile
    }
}

//october 28th class session for reference