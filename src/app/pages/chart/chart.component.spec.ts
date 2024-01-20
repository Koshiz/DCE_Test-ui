import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ChartComponent } from './chart.component';

describe('ChartComponent', () => {
  let component: ChartComponent;
  let fixture: ComponentFixture<ChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChartComponent],
      imports: [RouterTestingModule], // Import RouterTestingModule for the router dependency
    });
    fixture = TestBed.createComponent(ChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a canvas reference after view initialization', () => {
    expect(component.canvasRef).toBeTruthy();
    expect(component.canvasRef.nativeElement instanceof HTMLCanvasElement).toBeTruthy();
  });

  it('should have a chartData input property', () => {
    const chartData = [{ round: 1, winPercentage: 50 }];
    component.chartData = chartData;

    expect(component.chartData).toEqual(chartData);
  });

  it('should initialize chart when view is initialized', () => {
    const chartSpy = spyOn<any>(component, 'createLineChart'); // Spy on the private method

    component.ngAfterViewInit();

    expect(chartSpy).toHaveBeenCalled();
  });

  it('should navigate back when goBack is called', () => {
    const routerSpy = spyOn(component['router'], 'navigate');
    component.goBack();

    expect(routerSpy).toHaveBeenCalledWith(['/']);
  });
});
