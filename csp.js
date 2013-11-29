
    Polymer('ceci-button', {
      ready: function () {
        this.ceci({
          broadcasts: ['click'],
          defaultBroadcasts: ['click']
        });
      },
      buttonClick: function () {
        this.broadcast('click', this.getAttribute('value'));
      },
      labelChanged: function (oldValue, newValue) {
        this.$.button.innerHTML = newValue;
      }
    });
  ;

    Polymer('ceci-counter', {
      ready: function () {
        this.ceci({
          broadcasts: ['click'],
          defaultBroadcasts: ['click']
        });
        this.setValue(JSON.parse(this.getAttribute('value') || '0')); // XXX harden
        this.increment = JSON.parse(this.getAttribute('increment') || '1'); // XXX harden
      },
      countUp: function(thing) {
        this.setValue(this.getValue() + this.increment);
      },
      countDown: function(thing) {
        this.setValue(this.getValue() - this.increment);
      },
      setValue: function(value) {
        this.value = value;
        this.updateDisplay();
      },
      getValue: function() {
        return JSON.parse(this.$.count.innerHTML);
      },
      unitChanged: function (oldValue, newValue) {
        this.$.label.innerHTML = newValue;
        this.updateDisplay();
      },
      updateDisplay: function() {
        this.$.count.innerHTML = JSON.stringify(this.value);
      }
    });
  