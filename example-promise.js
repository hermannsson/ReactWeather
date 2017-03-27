// function getTempCallback(location, callback) {
//   callback(undefined, 78);
//   callback('City not found');
// }
//
// getTempCallback('Iceland', function (err, temp) {
//   if(err) {
//     console.log('error', err);
//   } else {
//     console.log('success', temp);
//   }
// });
//
// function getTempPromise(location) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function() {
//       resolve(79);
//       reject('City not found');
//     }, 1000);
//   });
// }
//
// getTempPromise('Iceland').then(function(temp) {
//   console.log('Promise success', temp);
// }, function(err) {
//   console.log('Promise error', err);
// });

// Challenge area
function addPromise(a, b) {
  return new Promise(function (resolve, reject) {
    if (typeof a === 'number' && typeof b === 'number') {
      resolve(a + b);
    } else {
      reject('a and b need to be numbers!');
    }
  });
}

addPromise(2, 3).then(function(sum) {
  console.log('Success', sum);
}, function(err) {
  console.log('Error', err);
});

addPromise('hestur', 9).then(function(sum) {
  console.log('Success', sum);
}, function(err) {
  console.log('Error,', err);
});
