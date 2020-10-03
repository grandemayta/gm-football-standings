import { Component, h, Element, Host, Event } from '@stencil/core';
import { StandingType } from '@models';
import { EventEmitter } from '@stencil/core/internal';

@Component({
  tag: 'gm-standing-panel',
  styleUrl: 'gm-standing-panel.scss',
  shadow: true,
})
export class GmStandingPanel {
  @Element() el: HTMLElement;
  @Event() switchPanel: EventEmitter<string>;
  
  currentStandingHandler(type: string): void {
    this.switchPanel.emit(type);
    this.setActive(type);
  }

  setActive(type: string): void {
    const buttons = Array.from(this.el.shadowRoot.querySelectorAll('button'));
    buttons.forEach((button) => {
      const value = button.getAttribute('data-value');
      const isActive = button.classList.contains('active');
      
      if (!isActive && type === value) {
        button.classList.add('active');
      }
      if (isActive && type !== value){
        button.classList.remove('active')
      }
    });
  }

  render() {
    return (
      <Host>
        <button
          class="active"
          data-value={StandingType.TOTAL}
          onClick={() => this.currentStandingHandler(StandingType.TOTAL)}
          >
            Generale
          </button>
        <button
          data-value={StandingType.HOME}
          onClick={() => this.currentStandingHandler(StandingType.HOME)}
          >
            Casa
          </button>
        <button
          data-value={StandingType.AWAY}
          onClick={() => this.currentStandingHandler(StandingType.AWAY)}
          >
            Trasferta
          </button>
      </Host>
    );
  }
}
