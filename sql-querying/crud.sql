\c playstore

-- FS4. Find all the apps that have education as one of their genres.
SELECT
app_name
FROM analytics
WHERE 'Education' = ANY(genres);
