# Gatling Studio Tutorial: Browser Recording to Load Test in Minutes

**Target Audience:** Developers using Gatling, manual scripters, occasional performance testers
**Video Type:** Sponsored Tutorial (mention briefly)
**Estimated Length:** 10-15 minutes
**Demo Site:** ecomm.gatling.io

---

## Hook / Opening (0:00 - 0:30)

"What if you could turn a browser recording into a production-ready load test? In this video, I'll show you how to do that in under 10 minutes using Gatling Studio.

"Here's the problem with load testing: the hard part isn't sending HTTP requests—it's handling all the dynamic stuff.
Correlation IDs that change every response. Auth tokens that need to be extracted and reused. Session headers that have to be just right.

Usually, you'd spend hours manually coding all of that in your Gatling script. But what if you could capture all of it automatically, just by using your browser? That's what we're doing today."

If you've ever stared at a blank editor trying to write a Gatling script from scratch, or spent hours manually coding HTTP requests and trying to capture realistic user behavior, you know the pain. That's the problem we're solving today."

**[ON SCREEN: Show blank IDE with cursor blinking, then cut to completed load test running]**

---

## Introduction to Gatling Studio (0:30 - 2:30)

"So let me give you a quick overview of what Gatling Studio actually is, because if you're familiar with Gatling, you might be wondering what's different here.

Traditionally, if you want to create a Gatling load test, you'd write code. You'd script out every HTTP request, every header, every parameter. You'd need to understand the Gatling DSL, understand how to chain requests together, handle correlation... it's not rocket science, but it takes time and expertise.

Gatling Studio is an AI-powered tool that basically automates that process. You record a user journey in your browser - like a normal person using your application - and Studio converts that recording into actual Gatling script code. We're talking minutes instead of hours.

**[ON SCREEN: Show Gatling Studio interface briefly]**

Now, full disclosure - this video is sponsored by Gatling. They reached out because I have a lot of experience with their tool, but I haven't actually used Studio until now. So what you're seeing is my genuine first impression as someone who's done plenty of manual Gatling scripting.

The key problems this solves:
- **Blank page syndrome** - you don't have to start from nothing
- **Time waste** - recording takes minutes, scripting takes hours
- **Realistic behavior** - it captures what users actually do, not what you think they do
- **Accessibility** - you don't need to be a Gatling expert to get started

Alright, let's see it in action."

---

## The Old Way (Brief Mention) (2:30 - 3:00)

"Before we dive into Studio, let me quickly show you what the manual approach looks like - just so you appreciate the difference.

**[ON SCREEN: Show a Gatling script file with manual HTTP requests]**

Here's a typical Gatling script. You'd write something like this for every request:

```scala
http("Add to Cart")
  .post("/cart")
  .header("Content-Type", "application/json")
  .body(StringBody("""{"productId": 123}"""))
  .check(status.is(200))
```

And you'd need to do this for every single interaction in your user journey. Multiply that by 10, 20, 30 requests... you get the idea. It works, but it's tedious.

Okay, now let's see the Studio way."

---

## Installing Gatling Studio (3:00 - 3:30)

"First thing - you need to install Gatling Studio locally. It's a desktop application.

**[ON SCREEN: Show download page or installation process]**

I've already got it installed here, but the process is straightforward - download, install, and you're good to go. Takes a couple minutes.

**[ON SCREEN: Launch Gatling Studio application]**

Alright, let's create our first recording."

---

## Recording a User Journey (3:30 - 7:00)

"For this demo, I'm using Gatling's demo e-commerce site at ecomm.gatling.io. It's a realistic shopping site, and I'm going to record a typical user journey:
1. Browse products
2. Add something to cart
3. Log in
4. Go through checkout

This is the kind of flow you'd want to load test in a real application.

**[ON SCREEN: Show starting a new recording in Studio]**

So in Studio, I'm going to click 'New Recording' and... it's going to open a browser instance that it can monitor.

**[ON SCREEN: Browser opens, navigate to ecomm.gatling.io]**

Now I'm just using the site normally. I'll browse around a bit...

**[Show clicking around products]**

Add this item to my cart...

**[Add item to cart]**

Now I need to log in to checkout...

**[Click login, enter credentials - you might mess up here, that's fine, leave it in]**

Oh, wrong password. Let me try again...

**[Login successfully]**

Okay, logged in. Now let's go through checkout...

**[Fill out checkout form - again, realistic pacing, maybe pause to "think" like a real user would]**

I'm going to fill this out... add my shipping info... payment details... and submit.

**[Complete checkout]**

Perfect. That's a complete user journey. Now here's the magic part - let me stop this recording.

**[ON SCREEN: Stop recording in Studio]**

Studio has been capturing every single HTTP request that happened during that session. Every click, every form submission, every API call. Now let's see it convert this into actual Gatling code."

---

## Converting to Gatling Script (7:00 - 8:30)

"So here's what Studio captured...

**[ON SCREEN: Show the recording timeline/list of requests]**

You can see all the requests here - there's the product browsing, the add to cart call, the login POST, all the checkout API calls... everything.

Now, watch this. I'm going to click 'Convert to Script'...

**[ON SCREEN: Show conversion process - might take a few seconds]**

And just like that, we have Gatling code.

**[ON SCREEN: Show the generated Gatling script]**

Look at this - this is production Gatling Scala code. It's got all the HTTP requests, all the headers, correlation handling... stuff that would have taken me an hour or more to write manually, and Studio generated it in what, 30 seconds?

Now, I want to be clear - this isn't perfect. It's automated about 80% of what you need, but you're still going to want to review it manually. You might need to tweak things, add some custom logic, whatever. But 80% automated is way better than 0% automated.

Let me show you what kinds of edits you typically want to make."

---

## Editing the Script (8:30 - 11:00)

"So let's make this script more realistic for a load test. Right now, it's just executing requests as fast as possible, which isn't how real users behave.

**[ON SCREEN: Show the script in an editor]**

First thing - **think time**. Real users pause between actions. They read content, they think about what to click next. Let me add some think time here...

```scala
.pause(2)
```

**[Add pause between a few key actions]**

This makes the test simulate more realistic user behavior.

Next - **pacing**. You want to control how many iterations each virtual user completes per hour. Let me add pacing at the scenario level...

```scala
.pace(30 seconds)
```

Now each user will complete roughly 2 iterations per minute.

Let me also add an **assertion** here to make sure the checkout actually succeeds...

```scala
.check(status.is(200))
.check(jsonPath("$.orderId").exists)
```

**[Maybe you stumble here, miss a bracket - leave it in]**

Oh, syntax error. Let me fix that... there we go.

One more thing - **parameterization**. Right now, this script always searches for the same product. In a real load test, you want variation. Let me parameterize the search term...

**[Show adding a feeder or variable for search term]**

This way, different virtual users will search for different things, which is more realistic.

And... that's really it. These are the kinds of manual touches you add after Studio generates the base script. Still way faster than writing everything from scratch.

Now let's run this thing."

---

## Uploading to Enterprise & Executing (11:00 - 13:00)

"So the last step is getting this script into Gatling Enterprise and running the actual load test.

**[ON SCREEN: Show upload process to Enterprise]**

Studio makes this pretty easy - there's a direct upload button here. I'm going to push this script to my Enterprise instance...

**[Upload the script]**

And now in Enterprise, I can configure my test - how many users, what ramp-up, which regions to run from, all that good stuff.

**[ON SCREEN: Show Enterprise test configuration briefly]**

I'm not going to go deep into Enterprise configuration in this video - that's a whole separate topic - but the point is, we went from browser recording to executable load test in, what, about 10 minutes?

Let me start this test...

**[ON SCREEN: Show test starting, maybe initial metrics coming in]**

And we're running. You can see virtual users ramping up, requests per second, response times... all the metrics you need to analyze performance.

This is the power of Studio - you compressed what used to be a multi-hour process into minutes. Record, convert, edit, run. That's the workflow."

---

## Limitations & Realistic Expectations (13:00 - 14:00)

"Before I wrap up, let me be realistic about what this tool is and isn't.

Studio automates probably 80% of the work, but you still need to review and tweak the generated code. It's not a magic wand that eliminates all manual work. You'll still want to add think time, assertions, parameterization - all the stuff we just did.

And this isn't a replacement for understanding Gatling fundamentals. If you don't know what a scenario is, what pacing does, how correlation works - you should learn that stuff. Studio makes you more efficient, but it doesn't make you an expert.

If you get stuck or want to dive deeper, check out the Gatling docs and their support channels. There's a lot of good content out there.

But if you're currently writing Gatling scripts by hand, or if you're avoiding load testing because it seems too complex, Studio is absolutely worth checking out. The time savings alone are significant."

---

## Call to Action & Closing (14:00 - 15:00)

"Alright, that's Gatling Studio. Browser recording to production load test in under 15 minutes.

If you want to try this yourself, check out Gatling Enterprise - I'll put a link in the description. They have a free trial, so you can test drive Studio without committing to anything.

And if you have questions - like specific use cases, integration questions, whatever - drop them in the comments. I'll do my best to answer, and the Gatling team monitors these as well.

Thanks for watching, and I'll see you in the next one."

**[ON SCREEN: End card with links to Gatling Enterprise, your channel, etc.]**

---

## Production Notes

**Key Examples to Show:**
- Blank IDE with cursor (opening hook)
- ecomm.gatling.io user journey recording
- Generated Gatling script code
- Manual edits (think time, pacing, assertions, parameterization)
- Enterprise upload and execution (brief)

**Demos Needed:**
- Complete recording flow (browsing, add to cart, login, checkout)
- Script conversion process
- Code editing in IDE
- Enterprise test configuration and execution start

**Timing Guidance:**
- Don't rush the recording - let it feel natural
- The "magic moment" is the conversion - emphasize the speed
- Editing section can be longer if you're explaining as you go
- Enterprise section should be brief - just enough to show completion

**Key Points to Emphasize:**
- Speed: recording to running in ~10 minutes
- Ease: no blank page syndrome
- Realistic: captures actual user behavior
- Not magic: still need to review and understand fundamentals (80% automated)

**Authenticity Notes:**
- Leave in realistic hiccups (wrong password, syntax error)
- Don't make it seem perfect or fully automated
- Acknowledge limitations clearly
- Point to docs/support for learning more

**Screen Recording Checklist:**
- [ ] Gatling Studio interface
- [ ] Browser recording session (full user journey)
- [ ] Conversion process
- [ ] Generated script code
- [ ] Manual edits in IDE
- [ ] Enterprise upload UI
- [ ] Test execution dashboard

**Transition Style:**
- Hard cuts between sections
- Don't overthink transitions
- Keep it moving, tutorial-style pacing
