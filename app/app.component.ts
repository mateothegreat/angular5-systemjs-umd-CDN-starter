import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `

    <style>

        mat-toolbar {

            display: flex;
            

        }

        .content {

            padding: 10px;
    
        }

        .spacer {

            flex: 1;

        }

        button { color: #000; margin: 0 10px; }

    </style>

    <mat-toolbar class="mat-elevation-z4" color="primary">

          <mat-toolbar-row>

            <span>mat-toolbar</span>

            <span class="spacer"></span>

            <mat-icon class="example-icon">favorite</mat-icon>
            <mat-icon class="example-icon">delete</mat-icon>
            
            <button mat-raised-button>

                <a href="https://github.com/mateothegreat/angular5-systemjs-umd-CDN-starter">codepen</a>

            </button>
            
            <button mat-raised-button color="accent">

                <a href="https://github.com/mateothegreat/angular5-systemjs-umd-CDN-starter">github</a>

            </button>

        </mat-toolbar-row>

    </mat-toolbar>

    <div class="content">

        <h3>Raised Buttons</h3>

        <div class="button-row">

            <button mat-raised-button>Basic</button>
            <button mat-raised-button color="accent">Accent</button>
            <button mat-raised-button color="warn">Warn</button>
            <button mat-raised-button disabled>Disabled</button>

        </div>

    </div>

    `,
})
export class AppComponent  { name = 'Angular'; }
