import {AfterViewInit, Component, ElementRef, HostListener, OnInit, QueryList, ViewChildren} from '@angular/core';
import {ViewportScroller} from '@angular/common';
import {Router} from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit, AfterViewInit {
  @ViewChildren('section') private anchors: QueryList<ElementRef>;
  private sections: any[];
  public activeElement: string;
  public innerWidth: number;

  @HostListener('window:scroll', ['$event'])
  scrollHandler() {
    this.trackPagePosition();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
  }

  constructor(
    private router: Router,
    private scroller: ViewportScroller
  ) {
  }

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
    this.activeElement = 'qui-suis-je';
  }

  ngAfterViewInit(): void {
    this.sections = this.anchors.map(el => {
      return {
        element: el.nativeElement,
        position: el.nativeElement.offsetTop
      };
    });
    this.trackPagePosition();
  }

  private trackPagePosition() {
    const scrollPos = (this.scroller.getScrollPosition())[1];
    const active = this.sections.filter((el, index) => {
      if (index === 0) {
        return scrollPos < (this.sections[index + 1].position - 80);
      } else if (index === this.sections.length - 1) {
        return scrollPos >= (el.position - 80);
      } else {
        return scrollPos >= (el.position - 80) && scrollPos < (this.sections[index + 1].position - 80);
      }
    });
    this.activeElement = active[0].element.title;
  }

  public openPDF() {
    window.open('/assets/cv_gabriel_claveau-baril.pdf', '_blank');
  }

}
