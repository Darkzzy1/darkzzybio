* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body, html {
    height: 100%;
    font-family: Arial, sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #f5f5f5;
}

.container {
    text-align: center;
}

h1 {
    font-size: 36px;
    margin-bottom: 30px;
}

.triangle-container {
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 40px;
}

.triangle {
    width: 0;
    height: 0;
    border-left: 50px solid transparent;
    border-right: 50px solid transparent;
    border-bottom: 100px solid #3498db;
    animation: move 3s infinite alternate;
}

button {
    padding: 10px 20px;
    font-size: 16px;
    background-color: #3498db;
    color: white;
    border: none;
    cursor: pointer;
    border-radius: 5px;
}

button:hover {
    background-color: #2980b9;
}

@keyframes move {
    0% {
        transform: translateY(0);
    }
    100% {
        transform: translateY(-50px);
    }
}
