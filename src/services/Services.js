import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000",
});





// =========== PROJECT APIs =================

// Get all projects (User side)
export const getProjects = async () => {
  try {
    const res = await API.get("/api/user/projects");
    return res.data;
  } catch (error) {
    throw error.response?.data || { message: "Error fetching projects" };
  }
};




// =========== CLIENT APIs ==================

export const getClients = async () => {
  try {
    const res = await API.get("/api/user/clients");
    return res.data;
  } catch (error) {
    throw error.response?.data || { message: "Error fetching clients" };
  }
};



// =========== CONTACT FORM ==================

export const submitContactForm = async (formData) => {
  try {
    const res = await API.post("/api/user/contact", formData);
    return res.data;
  } catch (error) {
    throw error.response?.data || { message: "Error submitting form" };
  }
};



// =========== SUBSCRIBE =====================

export const subscribeEmail = async (email) => {
  try {
    const res = await API.post("/api/user/subscribe", { email });
    return res.data;
  } catch (error) {
    throw error.response?.data || { message: "Error subscribing email" };
  }
};




// =========== ADMIN AUTH APIs =============

// Admin Login
export const adminLogin = async (email, password) => {
  try {
    const res = await API.post("/admin/login", { email, password });
    return res.data;
  } catch (error) {
    throw error.response?.data || { message: "Network Error" };
  }
};

// ---------- PROJECTS (user-facing list) ----------
export const getAllProjects = async () => {
  try {
    const res = await API.get("/api/user/projects");
    return res.data;
  } catch (error) {
    throw error.response?.data || { message: "Error fetching projects" };
  }
};

// ---------- ADMIN: Add Project (multipart) ----------
export const addProject = async (file, name, description) => {
  try {
    const formData = new FormData();
    formData.append("image", file);
    formData.append("name", name);
    formData.append("description", description);

    const res = await API.post("/admin/add-project", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return res.data;
  } catch (error) {
    throw error.response?.data || { message: "Error adding project" };
  }
};

// 🗑️ Delete Project
export const deleteProject = async (id) => {
  try {
    const res = await API.delete(`/admin/delete-project/${id}`);
    return res.data;
  } catch (error) {
    throw error.response?.data || { message: "Something went wrong" };
  }
};

// ➕ Add Client API
export const addClient = async (data) => {
  try {
    const res = await API.post("/admin/add-client", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return res.data;
  } catch (error) {
    throw error.response?.data || { message: "Something went wrong" };
  }
};

// ---------- CLIENTS ----------
export const getClientsAdmin = async () => {
  try {
    const res = await API.get("/admin/clients");
    return res.data;
  } catch (error) {
    throw error.response?.data || { message: "Error fetching clients" };
  }
};



// 🗑️ Delete Client
export const deleteClient = async (id) => {
  try {
    const res = await API.delete(`/admin/delete-client/${id}`);
    return res.data;
  } catch (error) {
    throw error.response?.data || { message: "Something went wrong" };
  }
};


// ---------- CONTACTS ----------
export const getContactsAdmin = async () => {
  try {
    const res = await API.get("/admin/contacts");
    return res.data;
  } catch (error) {
    throw error.response?.data || { message: "Error fetching contacts" };
  }
};

// ---------- SUBSCRIBERS ----------
export const getSubscribersAdmin = async () => {
  try {
    const res = await API.get("/admin/subscribers");
    return res.data;
  } catch (error) {
    throw error.response?.data || { message: "Error fetching subscribers" };
  }
};

export default API;