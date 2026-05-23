export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method not allowed" });
    }

    const webhookURL = "TON_WEBHOOK_DISCORD_ICI";

    try {
        const response = await fetch(webhookURL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(req.body)
        });

        if (!response.ok) {
            return res.status(500).json({ error: "Webhook failed" });
        }

        return res.status(200).json({ success: true });

    } catch (err) {
        return res.status(500).json({ error: "Server error" });
    }
}
