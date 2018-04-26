import Controller from '@ember/controller';
import {
  match,
  not
} from '@ember/object/computed';

export default Controller.extend({

  headerMessage: 'Contact Page',
  responseMessage: '',
  emailAddress: '',
  textMessage: '',

  isValid: match('emailAddress', /^.+@.+\..+$/),
  isDisabled: not('isValid'),

  actions: {

    sendMessage() {
      alert(`Sending messag from: ${this.get('emailAddress')}`);
      this.set('responseMessage', `Thank you! We've received your message from: ${this.get('emailAddress')}`);
      this.set('emailAddress', '');
      this.set('textMessage', '');
    }
  }

});
