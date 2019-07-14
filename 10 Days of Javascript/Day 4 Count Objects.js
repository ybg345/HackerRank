/*

Problem Link: https://www.hackerrank.com/challenges/js10-count-objects/problem
------------------------------------------------------------------------------

*/


// Solution: 

/*
 * Return a count of the total number of objects 'o' satisfying o.x == o.y.
 * 
 * Parameter(s):
 * objects: an array of objects with integer properties 'x' and 'y'
 */
function getCount(objects) {
    var count = 0;

    for (var i = 0; i < objects.length; i++) {
        if (objects[i].x == objects[i].y) {
            count += 1;
        }
    }

    return count;
}
