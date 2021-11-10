for (let i = 0; i < 3; i++) {
    const last = A[A.length - 1];
    A.pop();
    A.unshift(last);