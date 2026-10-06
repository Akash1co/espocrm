Espo.define('custom:views/user/smart-reminder-preferences', 'views/record/edit', function (Dep) {

    return Dep.extend({

        setup: function () {
            Dep.prototype.setup.call(this);
            
            this.listenTo(this.model, 'change:enableSmartReminders', this.toggleReminderOptions, this);
        },

        afterRender: function () {
            Dep.prototype.afterRender.call(this);
            this.toggleReminderOptions();
        },

        toggleReminderOptions: function () {
            if (this.model.get('enableSmartReminders')) {
                this.showField('reminderDelayDays');
                this.showField('groqAiAutoSchedule');
            } else {
                this.hideField('reminderDelayDays');
                this.hideField('groqAiAutoSchedule');
            }
        }
    });
});
