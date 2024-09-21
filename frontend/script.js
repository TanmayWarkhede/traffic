document.getElementById('predict').addEventListener('click', async () => {
    const inputData = { 
        hour: new Date().getHours(), 
        day: new Date().getDay(), 
        month: new Date().getMonth() + 1 
    };

    const response = await fetch('http://localhost:5000/api/traffic/predict', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(inputData),
    });

    if (response.ok) {
        const result = await response.json();
        document.getElementById('predictionResult').textContent = `Predicted Congestion: ${result.prediction}`;
    } else {
        console.error('Prediction failed:', response.statusText);
    }
});
