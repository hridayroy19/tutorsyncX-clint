/* eslint-disable @typescript-eslint/no-explicit-any */
// get all products

export const getAllUser = async () => {
    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_BASE_API}api/user`,
            {
                next: {
                    tags: ["USER"], // Next.js caching tag
                },
            }
        );

        if (!res.ok) {
            throw new Error(`Failed to fetch users: ${res.status} ${res.statusText}`);
        }

        const data = await res.json();
        console.log("Fetched Users:", data);
        return data;
    } catch (error: any) {
        console.error("Error fetching users:", error.message);
        return { success: false, message: error.message };
    }
};
