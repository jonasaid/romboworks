// Importa las utilidades necesarias para las pruebas unitarias de Angular
import { ComponentFixture, TestBed } from '@angular/core/testing';

// Importa el componente que se va a probar
import { FaqsComponent } from './faqs.component';

// Describe el conjunto de pruebas para el componente FaqsComponent
describe('FaqsComponent', () => {
  // Variable para almacenar la instancia del componente
  let component: FaqsComponent;
  // Variable para almacenar el fixture del componente, que permite acceder al DOM y manipular el componente en las pruebas
  let fixture: ComponentFixture<FaqsComponent>;

  // beforeEach se ejecuta antes de cada prueba para configurar el entorno de pruebas
  beforeEach(async () => {
    // Configura el módulo de pruebas declarando el componente que se va a testear
    await TestBed.configureTestingModule({
      declarations: [ FaqsComponent ]
    })
    // Compila el template y los estilos del componente
    .compileComponents();

    // Crea el fixture para el componente FaqsComponent
    fixture = TestBed.createComponent(FaqsComponent);
    // Obtiene la instancia del componente desde el fixture
    component = fixture.componentInstance;
    // Ejecuta la detección de cambios para que el template se actualice con la instancia del componente
    fixture.detectChanges();
  });

  // Prueba unitaria que verifica que el componente se haya creado correctamente
  it('should create', () => {
    // Se espera que la instancia del componente sea verdadera (exista)
    expect(component).toBeTruthy();
  });
});
