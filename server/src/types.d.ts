declare namespace Express {
  export interface User {
    id: string;
    username: string;
    password: string; //storing plain password here, do not ever Ever do this at home!!!
  }
}
