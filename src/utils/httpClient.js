const API = "https://api.themoviedb.org/3"

export function get(path) {
    return fetch(API + path, {
        headers: {
            Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3N2Y4ZDQ1ZjZiNTBkZWI5MTIzN2I0ZWNkMzU2YjJjNSIsInN1YiI6IjYyODQwOTRiNmQ5ZmU4MzQ5MWIwYmYzNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mWwKmoT2hRQ7qN5aalyS8SJCnOpZtsDAvnt5QP0jV8Y",
            "Content-Type": "application/json;charset=utf-8",
        }
    }).then((result) => result.json())
}