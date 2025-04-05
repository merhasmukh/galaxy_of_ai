import { signOut } from "next-auth/react";

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

export const Logout = async () => {
    // Clear custom tokens
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    localStorage.removeItem("token_expiry_time");
    document.cookie = "accessToken=; Max-Age=0; path=/;";
  
    // Call logout API to clear session cookies server-side
    await fetch("/api/logout", { method: "POST" });
  
    // Sign out NextAuth (important: no redirect here)
    await signOut({ redirect: false });
  
    // Redirect manually
    window.location.href = "/user/login";
  };
