import { Pipe, PipeTransform, signal } from '@angular/core';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  transform(users: any[], name: string): any {
   // console.log(users, name);
    if (!users) return [];
    if (!name) return users;

    return users.filter(
      (userObj) =>
        userObj?.name.toLowerCase().indexOf(name?.toLowerCase()) !== -1
    );
  }
}



