import { useRouter } from "next/router";
import { useState } from "react";

export default function RouterSelector() {
    const [routerType, setRouterType] = useState("app-router");
    const router = useRouter();

    const handleChange = (e) => {
        setRouterType(e.target.value);
        router.push(`/${e.target.value}`);
    };

    return (
        <div className="flex items-center mb-4">
            <svg
                className="mr-2"
                fill="none"
                height="24"
                shapeRendering="geometricPrecision"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                width="24"
                style={{ color: "currentcolor", width: "20px", height: "20px" }}
            >
                <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"></path>
                <path d="M3.27 6.96L12 12.01l8.73-5.05"></path>
                <path d="M12 22.08V12"></path>
            </svg>
            <select
                value={routerType}
                onChange={handleChange}
                className="border p-2 rounded-md"
            >
                <option value="app-router">App Router</option>
                <option value="pages-router">Pages Router</option>
            </select>
        </div>
    );
}