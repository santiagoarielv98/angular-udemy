import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'gifs-search-box',
  template: `
    <h5>Buscar:</h5>
    <input
      type="text"
      class="form-control"
      placeholder="Buscar gifs..."
      (keyup.enter)="searchTag()"
      #txtTagInput
    />
    <!-- # es para una referencia del tag -->
    <!-- los evento () tienen propiedades por asi decirlo keyup tiene keyup.enter para cuando una persona presiona la tecla enter -->
  `,
})
export class SearchBoxComponent {
  @ViewChild('txtTagInput') // sirve para obtener la referencia de un tag
  public tagInput!: ElementRef<HTMLInputElement>;

  /* searchTag(newTag: string): void {
    console.log({ newTag });
  } */
  searchTag(): void {
    const newTag = this.tagInput.nativeElement.value;
  }
}
