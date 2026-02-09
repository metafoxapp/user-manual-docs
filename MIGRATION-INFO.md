# Migration from Atlassian Confluence

This project includes a standalone migration tool to convert Atlassian Confluence exports to Nextra documentation format.

## 📂 Folder Structure

```
.
├── migrate/                    # ⭐ Standalone migration tool (separate from docs site)
│   ├── package.json           # Migration tool dependencies (separate)
│   ├── migrate-confluence.js  # Migration script
│   ├── QUICKSTART-MIGRATION.md
│   ├── MIGRATION.md
│   └── CONFLUENCE-STRUCTURE-ANALYSIS.md
│
├── atlasian.xml/              # Your Confluence export data
│   ├── entities.xml
│   └── attachments/
│
├── pages/                     # Current documentation pages (for doc site)
├── package.json              # Doc site dependencies
└── ...
```

## ⚠️ Important Notes

### Separate Dependencies

- **Documentation Site** (`./package.json`): Dependencies for Next.js + Nextra
- **Migration Tool** (`./migrate/package.json`): Dependencies for migration only

These are **completely separate**. Installing migration dependencies won't affect your documentation site.

### How It Works

1. The **migration tool** is in `./migrate/` folder
2. It reads Confluence export from `./atlasian.xml/`
3. It generates converted files in `./migrate/pages/` and `./migrate/public/`
4. You review and then copy to main `./pages/` when ready

## 🚀 Quick Start

### Step 1: Place Confluence Export

```bash
# Extract your Confluence export to atlasian.xml/
unzip confluence-export.zip -d atlasian.xml/
```

### Step 2: Run Migration

```bash
# Navigate to migration tool folder
cd migrate/

# Install migration dependencies (won't affect main site)
npm install

# Run migration
npm run migrate
```

### Step 3: Review Generated Files

```bash
# Still in migrate/ folder
ls -la pages/
cat pages/_meta.js
```

### Step 4: Copy to Production

```bash
# Go back to root
cd ..

# Copy generated files to main site
cp -r migrate/pages/* pages/
cp -r migrate/public/images/* public/images/

# Test main site
npm run dev
```

## 📚 Documentation

All migration documentation is in the `migrate/` folder:

- **`migrate/QUICKSTART-MIGRATION.md`** - Quick start guide (Vietnamese)
- **`migrate/MIGRATION.md`** - Detailed migration guide (English)
- **`migrate/CONFLUENCE-STRUCTURE-ANALYSIS.md`** - Technical analysis of Confluence structure
- **`migrate/README.md`** - Migration output folder documentation

## 🔧 Main Documentation Site

To work on the documentation site itself (not migration):

```bash
# From project root
npm install   # Install doc site dependencies
npm run dev   # Start development server
npm run build # Build for production
```

## 🛠️ Troubleshooting

### "Module not found" when running migration

**Solution:** Make sure you're in the `migrate/` folder:
```bash
cd migrate/
npm install
npm run migrate
```

### Main doc site won't start after migration

**Solution:** The migration tool is separate. Your main site should not be affected. If there are issues:
```bash
# From project root (not migrate/)
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Where are migrated files?

Migration output goes to:
- `migrate/pages/` - Generated .mdx files
- `migrate/public/images/` - Copied images

These are NOT in the main `pages/` folder until you copy them.

## 📝 Workflow Summary

```
1. Confluence Export → atlasian.xml/
2. Run migration tool → migrate/pages/ (output)
3. Review & test
4. Copy to main → pages/ (production)
5. Deploy site
```

## 🎯 Benefits of Separate Structure

✅ Migration dependencies don't bloat main site  
✅ Can safely delete `migrate/` after migration is done  
✅ No conflicts between migration and documentation  
✅ Clear separation of concerns  

## Need Help?

- For migration issues: Check `migrate/MIGRATION.md`
- For doc site issues: Check main `README.md`
