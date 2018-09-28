// base class
var Job = function() {
  this.pays = true;
};

// prototype methods
Job.prototype.print = function() {
  console.log(this.pays ? 'Please hire me' : 'no thank you');
}

// subclass
var TechJob = function(title, pays) {
  Job.call(this);
  this.title = title;
  this.pays = pays;
}

TechJob.prototype = Object.create(Job.prototype);
TechJob.prototype.constructor = TechJob;