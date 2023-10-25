app.post('/calculateSum', (req, res) => {
    const numbers = req.body.numbers;

    if (!Array.isArray(numbers)) {
        return res.status(400).json({ error: 'Input must be an array of numbers' });
    }

    const sum = numbers.reduce((total, num) => total + num, 0);
    res.json({ sum });
});