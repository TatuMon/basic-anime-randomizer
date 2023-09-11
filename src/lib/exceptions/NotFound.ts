/**
* The page you requested is undefined
* */
export default class NotFound extends Error {
    constructor(route: string) {
        super(`The route '${route}' is undefined`);
        this.name = 'Page Not Found';
    }
}
