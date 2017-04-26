'use strict';

import mongoose from 'mongoose';
import {registerEvents} from './project.events';

var ProjectSchema = new mongoose.Schema({
  name: String,
  description: String,
  active: Boolean,
  startDate: Date,
  endDate: Date,
  technologies: [String]
});

registerEvents(ProjectSchema);
export default mongoose.model('Project', ProjectSchema);
