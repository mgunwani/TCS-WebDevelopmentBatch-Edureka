// import { ComponentFixture, TestBed } from '@angular/core/testing';

// import { CalculationComponent } from './calculation.component';

// describe('CalculationComponent', () => {
//   let component: CalculationComponent;
//   let fixture: ComponentFixture<CalculationComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [ CalculationComponent ]
//     })
//     .compileComponents();
//   });

//   beforeEach(() => {
//     fixture = TestBed.createComponent(CalculationComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CalculationComponent } from "./calculation.component";

let calc: CalculationComponent;
let fixture: ComponentFixture<CalculationComponent>;

beforeAll(async () => {
  await TestBed.configureTestingModule({
    declarations: [CalculationComponent],
    imports: [],
    providers: [],
  })
    .compileComponents();
});

beforeAll(() => {
  // calc = new CalculationComponent();
  fixture = TestBed.createComponent(CalculationComponent);
  calc = fixture.componentInstance;
  fixture.detectChanges();
});

describe('Calculation-Component-Testing', function () {

  it('Component Instantiation', function () {
    expect(calc instanceof CalculationComponent).toEqual(true);   // Passes Test Case
    // expect(calc instanceof AppComponent).toEqual(true);   // Fails Test Case
  })

  it('Testing Title', function () {
    expect(calc.title).toEqual('Calculation Component!!');
  })

});

describe('Calculation - Testing Addition Method', () => {

  it('Testing Two Positive Numbers', () => {
    expect(calc.addition(100, 200)).toEqual(300);
  })

  it('Testing Two Negative Numbers', () => {
    expect(calc.addition(-100, -200)).toEqual(-300);
  })

  it('Testing First Positive and Second Negative Number', () => {
    expect(calc.addition(100, -200)).toEqual(-100);
  })

  it('Testing First Negative and Second Positive Number', () => {
    expect(calc.addition(-100, 200)).toEqual(100);
  })

})











