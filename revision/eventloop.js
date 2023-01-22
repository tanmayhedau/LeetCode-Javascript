/*

eventloop in javascript is such a mechanism which handles the lifecycle of a callback function from the callback queue to the call stack.

how does this eventloop works?
whenever the callstack is empty, the first entered unit in the callback queue is pushed to the callstack by the event loop, which was observing both the call stack and callback queue.

*/