export class Book {
  constructor(
    public author: string,
    public details: BookDetail[],
    public id: number,
    public name: string,
    public serialNumber: string,
    public subscribers: User[]
  ) {}
}

export class BookDetail {
  constructor(
    public comments: Comment[],
    public coverUrl: string,
    public description: string,
    public id: number,
    public ratings: Rating,
    public source: Source,
    public tag: Tag[]
  ) {}
}

export class Comment {
  constructor(
    public bookDetail: BookDetail,
    public content: string,
    public id: number,
    public parent: Comment,
    public parentId: number,
    public user: User
  ) {}
}

export class Device {
  constructor(public id: number, public status: string, public token: string, public user: User) {}
}

export class LoginUser {
  constructor(public email: string, public fullName: string, public password: string, public username: string) {}
}

export class Rating {
  constructor(public bookDetail: BookDetail, public id: number, public user: User, public value: number) {}
}

export class SearchingCriteria {
  constructor(public keyword: string) {}
}

export class Tag {
  constructor(public id: string, public name: string) {}
}

export class User {
  constructor(
    public bookInWishList: Book[],
    public comments: Comment[],
    public createAt: string,
    public devices: Device[],
    public email: string,
    public fullName: string,
    public id: number,
    public password: string,
    public ratings: Rating[],
    public username: string
  ) {}
}

export enum Source {
  AAHCM = 'AAHCM',
  AACT = 'AACT',
  AADN = 'AADN',
  AAYG = 'AAYG',
  PANMAC = 'PANMAC',
  OPEN_LIBRARY = 'OPEN_LIBRARY',
  BOOK_MOOCH = 'BOOK_MOOCH',
  IT_BOOK_STORE = 'IT_BOOK_STORE',
  UNKNOWN = 'UNKNOWN'
}
