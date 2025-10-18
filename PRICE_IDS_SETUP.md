# 🎯 Quick Price IDs Setup - 5 Minutes

## ✅ Your API Keys Are Configured!

Your Stripe test keys are now active. To complete the setup, you need to create **Price IDs** in Stripe Dashboard.

---

## 📦 Step-by-Step: Create Products & Price IDs

### 1. Go to Stripe Products Page
Open: https://dashboard.stripe.com/test/products

### 2. Create Product #1: VideoAI Starter

Click **"+ Add product"**

**Product Information:**
- Name: `VideoAI Starter`
- Description: `Perfect for individuals getting started`

**Pricing Information:**
Click "Add pricing" button

**First Price (Monthly):**
- Price: `$19.00`
- Billing period: `Monthly`  
- Currency: `USD`
- Click "Add price"

**Second Price (Annual):**
- Click "Add another price"
- Price: `$180.00` (or `$15.00` per month)
- Billing period: `Yearly`
- Currency: `USD`
- Click "Add price"

Click **"Save product"**

**📋 Copy Both Price IDs:**
- You'll see two price IDs like `price_xxxxxxxxxxxxx`
- Copy the monthly one → This is your `STRIPE_STARTER_MONTHLY_PRICE_ID`
- Copy the annual one → This is your `STRIPE_STARTER_ANNUAL_PRICE_ID`

---

### 3. Create Product #2: VideoAI Professional

Click **"+ Add product"** again

**Product Information:**
- Name: `VideoAI Professional`
- Description: `For content creators and marketers`

**Pricing Information:**

**First Price (Monthly):**
- Price: `$49.00`
- Billing period: `Monthly`
- Currency: `USD`
- Click "Add price"

**Second Price (Annual):**
- Click "Add another price"
- Price: `$468.00` (or `$39.00` per month)
- Billing period: `Yearly`
- Currency: `USD`
- Click "Add price"

Click **"Save product"**

**📋 Copy Both Price IDs:**
- Monthly → `STRIPE_PROFESSIONAL_MONTHLY_PRICE_ID`
- Annual → `STRIPE_PROFESSIONAL_ANNUAL_PRICE_ID`

---

### 4. Create Product #3: VideoAI Enterprise

Click **"+ Add product"** again

**Product Information:**
- Name: `VideoAI Enterprise`
- Description: `For teams and organizations`

**Pricing Information:**

**First Price (Monthly):**
- Price: `$99.00`
- Billing period: `Monthly`
- Currency: `USD`
- Click "Add price"

**Second Price (Annual):**
- Click "Add another price"
- Price: `$948.00` (or `$79.00` per month)
- Billing period: `Yearly`
- Currency: `USD`
- Click "Add price"

Click **"Save product"**

**📋 Copy Both Price IDs:**
- Monthly → `STRIPE_ENTERPRISE_MONTHLY_PRICE_ID`
- Annual → `STRIPE_ENTERPRISE_ANNUAL_PRICE_ID`

---

## 5. Share Price IDs With Me

Once you have all 6 Price IDs, share them here in this format:

```
Starter Monthly: price_xxxxx
Starter Annual: price_xxxxx
Professional Monthly: price_xxxxx
Professional Annual: price_xxxxx
Enterprise Monthly: price_xxxxx
Enterprise Annual: price_xxxxx
```

I'll update the configuration and your payment system will be fully functional!

---

## 🎯 Quick Summary

You need to create:
- ✅ 3 Products (Starter, Professional, Enterprise)
- ✅ 6 Prices total (2 per product - monthly & annual)
- ✅ Share 6 Price IDs with me

**Time needed:** 5 minutes

Once done, the Subscribe buttons will redirect to real Stripe Checkout pages!
