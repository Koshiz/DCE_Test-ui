import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SimulateServiceService } from 'src/app/services/simulate-service.service';
import { of } from 'rxjs';
import { SimulationViewComponent } from './simulation-view.component';

describe('SimulationViewComponent', () => {
  let component: SimulationViewComponent;
  let fixture: ComponentFixture<SimulationViewComponent>;
  let simulateService: jasmine.SpyObj<SimulateServiceService>;

  beforeEach(() => {
    const simulateServiceSpy = jasmine.createSpyObj('SimulateServiceService', ['runMontyHallGame']);

    TestBed.configureTestingModule({
      declarations: [SimulationViewComponent],
      providers: [
        { provide: SimulateServiceService, useValue: simulateServiceSpy }
      ],
    });
    fixture = TestBed.createComponent(SimulationViewComponent);
    component = fixture.componentInstance;
    simulateService = TestBed.inject(SimulateServiceService) as jasmine.SpyObj<SimulateServiceService>;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call runMontyHallGame when tryOutGames is called', () => {
    // Arrange
    const numberOfAttempts = 5;
    const isDoorChanged = true;

    // Act
    component.numberOfAttempts = numberOfAttempts;
    component.isDoorChanged = isDoorChanged;
    component.tryOutGames();

    // Assert
    expect(simulateService.runMontyHallGame).toHaveBeenCalledWith({ numberOfAttempts, isDoorChanged });
  });

  it('should update simulationResultEntity on successful runMontyHallGame', () => {
    // Arrange
    const mockResults = [{ isWin: true }, { isWin: false }];
    simulateService.runMontyHallGame.and.returnValue(of(mockResults));

    // Act
    component.tryOutGames();

    // Assert
    expect(component.simulationResultEntity).toEqual(mockResults);
  });

  it('should calculate win percentage correctly', () => {
    // Arrange
    component.simulationResultEntity = [
      { isWin: true },
      { isWin: false },
      { isWin: true },
      { isWin: true }
    ];

    // Act
    const winPercentage = component.calculateWinPercentage();

    // Assert
    expect(winPercentage).toBeCloseTo(75); // Assuming 75% win rate in this case
  });
});
