import { Component, Input, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements AfterViewInit {

  constructor(private router: Router){

  }

  private chart: Chart | null = null;

  @ViewChild('myChart') canvasRef!: ElementRef<HTMLCanvasElement>;

  @Input() chartData: any[] = [];

  ngAfterViewInit(): void {
    // Ensure the canvas is available before creating the chart
    if (this.canvasRef) {
      this.createLineChart();
    }
  }

  private createLineChart() {
    const canvas = this.canvasRef.nativeElement;
    const ctx = canvas.getContext('2d');

    if (!ctx) {
      console.error('Unable to get 2D context for canvas');
      return;
    }

    if (this.chart) {
      this.chart.destroy();
    }

    this.chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: this.chartData.map(result => `Round ${result.round}`),
        datasets: [{
          label: 'Win Percentage',
          data: this.chartData.map(result => result.winPercentage),
          borderColor: 'blue',
          fill: false,
        }],
      },
    });

    console.log('Line Chart created successfully');
  }

  goBack(): void {
    this.router.navigate(['/']);
  }
}

