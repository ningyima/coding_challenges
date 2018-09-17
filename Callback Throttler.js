/**
 * Some user interactions, such as resizing and scrolling, 
 * can create a huge number of browser events in a short period of time. 
 * If listeners attached to these events take a long time to execute, 
 * the user's browser can start to slow down significantly. To mitigate this issue, 
 * we want to implement a throttle function that will detect clusters of events 
 * and reduce the number of times we call an expensive function. 
 * 
 * Your function will accept an array representing a stream of event timestamps and 
 * return an array representing the times that a callback should have been called. 
 * If an event happens within wait time of the previous event, it is part of the same cluster. 
 * Your function should satisfy the following use cases: 
 * 
 * 1) Firing once on the first event in a cluster, e.g. as soon as the window starts resizing. 
 * 2) Firing once after the last event in a cluster, e.g. after the user window stops resizing. 
 * 3) Firing every interval milliseconds during a cluster, e.g. every 100ms while the window is resizing.
 */

function throttle(wait, onLast, onFirst, interval, timestamps) {
  console.log(wait, onLast, onFirst, interval, timestamps);
}
throttle(20, false, true, 0, [0,10,20,30]); //[0]
throttle(20, true, false, 0, [0,10,20,30]); //[50]

function throttle(wait, onLast, onFirst, interval, timestamps) {
  var output = [];
  var cluster = [timestamps[0]];
  var prev = timestamps[0];
  var new_cluster = false;

  // Iterate through timestamps and create clusters (first one is set above)
  for(let i = 1; i < timestamps.length + 1; i++) {
    // If timestamp is within the cluster, add to cluster
    if (!new_cluster && i < timestamps.length && timestamps[i] - prev <= wait) {
      cluster.push(timestamps[i]);
      // Else only occurs when at the end of a cluster, therefore, 
      // we check conditions for output there...
      // ceating clusters then passing them to a function that checks conditions is a 10x better way of doing it
    } else {
      new_cluster = false;
      // do this because it was breaking on last iteration

      if(onFirst) {
        output.push(cluster[0]);
      }

      if (interval > 0) {
        intervalEvents(cluster, interval, wait, onLast).forEach(function(element) {
          output.push(element);
        });
      }

      if(onLast) {
        output.push(cluster[cluster.length - 1] + wait);
      }

      if (i < timestamps.length) {
        cluster = [timestamps[i]];
        new_cluster = true;
      }
    }

    prev = timestamps[i];
  }
  return output;
}