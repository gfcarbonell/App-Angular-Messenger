export interface IAuthentication<Object> {
    login(object: Object):Object;
    loginWithEmail(object: Object):Object;
    loginWithFacebook(object: Object):Object;
    registerWithEmail(object: Object):Object;
    logout():boolean;
    getState(): boolean;
}
