for (let i = 0; i < 1000000000; i++) {
    if (i % 990000000 === 0) {
      console.log(`Running Threads 3 ${i}`);
    }
  }