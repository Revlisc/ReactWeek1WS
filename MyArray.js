class MyArray {
    //where length is the number of objects in the list, elementData is lsit of values
    length = 0;
    elementData = [];

    //constructs a myarray, throws exception if given cap is less than 0
    //creates an empty myarray of given capacity
    constructor(capacity) {
        if (capacity < 0) {
            throw 'IllegalArgumentException: Capacity must be greater than zero.'
        }
        elementData = new [capacity];
    }

    //returns an index of a given value
    get(n) {
        for (let i = 0; i < MyArray.length; i++) {
            if (elementData[i] === n) {
                return i;
            }
            if (elementData[n] === -1) {
                throw 'Value does not exist.'
            }
        }
    }

    //adds a given value to the end of the list, extends capacity if full
    put(n) {
        if (length + 1 > capacity) {
            newcapacity = 2 * capacity + 1;
            capacity = newcapacity;
        }
        elementData[length + 1] = n;
        length++;
    }
}
