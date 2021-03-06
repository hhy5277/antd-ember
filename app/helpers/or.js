import Ember from 'ember';
import { orHelper } from 'ember-cli-idcos/helpers/or';

var forExport = null;

if (Ember.Helper) {
  forExport = Ember.Helper.helper(orHelper);
} else if (Ember.HTMLBars.makeBoundHelper) {
  forExport = Ember.HTMLBars.makeBoundHelper(orHelper);
}

export default forExport;
