import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'examesAprov'
})
export class ExamesAprovPipe implements PipeTransform {

  transform(value: number): string {
    if (value == 0) {
      return "PENDENTE"
    } else if (value == 1) {
      return "APROVADO"
    } else if (value == 2) {
      return "NÃO APROVADO"
    } else if (value == 3) {
      return "CONCLUÍDO"
    }
  }

}
