document.getElementById('userForm')?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
  
    const res = await fetch('http://localhost:5000/api/users/add', {
      method: 'POST',
      body: formData
    });
  
    const data = await res.json();
    console.log("Response from server:", data);
    alert(data.message);
    e.target.reset();
  });

  