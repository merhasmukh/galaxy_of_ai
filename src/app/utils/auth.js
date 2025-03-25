export const isTokenExpired = () => {
    if (typeof window === "undefined") {
        // localStorage is not available on the server
        return true;
    }
    const expiryTime = localStorage.getItem("token_expiry_time");
    if (!expiryTime) return true;

    const now = new Date();
    const expiryDate = new Date(expiryTime);
    return now >= expiryDate;
};


export const refreshToken = async () => {
    const response = await fetch("/api/token/refresh/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ refresh: localStorage.getItem("refresh_token") }),
    });

    if (response.ok) {
        const data = await response.json();
        localStorage.setItem("token", data.access);
        localStorage.setItem("token_expiry", data.access_expiry); // Update expiry
    } else {
        console.error("Failed to refresh token");
    }
};

export const Logout = () => {

    localStorage.removeItem("access_token");
    localStorage.removeItem("token_expiry_time");
  
    // Redirect to the login page
    window.location.href = "/login";
        
  
    };
