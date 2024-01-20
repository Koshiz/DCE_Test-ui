import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SimulateServiceService } from 'src/app/services/simulate-service.service';

@Component({
  selector: 'app-simulation-view',
  templateUrl: './simulation-view.component.html',
  styleUrls: ['./simulation-view.component.scss'],
  providers: [SimulateServiceService],
})
export class SimulationViewComponent {

  numberOfAttempts: number | undefined;
  isDoorChanged: boolean | undefined;
  simulationResultEntity: any[] = [];

  


  constructor(private simulationService: SimulateServiceService) {}

  tryOutGames()
  {
    const data = { numberOfAttempts: this.numberOfAttempts, isDoorChanged: this.isDoorChanged };

    this.simulationService.runMontyHallGame(data)
    .subscribe(results => {
      this.simulationResultEntity = results;
      console.log(this.simulationResultEntity);

    });

  
    // this.http.post<any>('https://localhost:7267/api/Simulation', data)
    //   .subscribe(results => {
    //     this.simulationResultEntity = results;
    //     console.log(this.simulationResultEntity);
    //   });
  }

  calculateWinPercentage(): number {
    const winCount = this.simulationResultEntity.filter(result => result.isWin).length;
    return (winCount / this.simulationResultEntity.length) * 100;
  }
  

}
