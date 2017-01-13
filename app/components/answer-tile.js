import Ember from 'ember';

export default Ember.Component.extend({
  editAnswerForm: false,
  actions: {
    editAnswer() {
      this.set('editAnswerForm', true);
    },
    cancel() {
      this.set('editAnswerForm', false);
    },
    saveAnswerEdit(answer) {
      var params = {
        author: this.get('answer.author'),
        content: this.get('answer.content')
      };
      this.set('editAnswerForm', false);
      this.sendAction('saveAnswerEdit', answer, params);
    },
    deleteAnswer(answer) {
      if(confirm("Are you sure you want to delete this answer? Once it is deleted it cannot be undone.")) {
        this.sendAction('deleteAnswer', answer);
      }
    }
  }
});
