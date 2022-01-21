declare namespace Express {

  export interface ProfileDetails {
    aboutMe?: string;
  }
  
  export interface InvoiceDetails {
    fullName: string;
    streetWithNumber: string;
    postCode: string;
    country: string;
  }

  export interface PaymentDetails {
    fullName: string;
    bic: string;
    iban: string;
    bank: string;
  }

  export interface UserDetails {
    profile?: ProfileDetails;
    art?: string[];
    invoice?: InvoiceDetails;
    payment?: PaymentDetails;
  }
  export interface User extends UserDetails{
    id: string;
    username: string;
    password: string; //storing plain password here, do not ever Ever do this at home!!!
  }
  
}
