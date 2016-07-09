
## A transformational journey {#journey-of-transformation}

In the introductory section the usefulness of a daily was set to question by the fact that it is not a software development activity in itself. To reiterate, no features are delivered, no bugs fixed and no customer served. Therefore, if a use for the daily is to be found, in that it somehow aids software development activities, the use must lie in the relation between the daily and other practices that _do_ constitute software development.

From the episodes found in the empirical data, a set was chosen such that their orientation is *not* toward the daily and what happens within but impactful on the outside world. They were curated into journeys, episodes which appeared related through their contradictions and their transformations. In this section, we follow one of those journeys in depth. We're going to find out about what was discussed in \ref{structural-change}, segments which prominently appeared and then vanished at the latter part of the observation period.

The journey starts with the first time that the team can be observed to identify a problem with the way they handle inbox items. The standard procedure options apparent to the team are handling the new work item as either wishlist or fire. Here, they come across a work item that does not fit their conception of either. The item appears to the team as simultaneously less urgent than a fire yet more important than a wishlist item.

#### Daily 09, `INBOX`

> 05:10
> :   "Let's put this [new work item] on the 'required' list" (`D1`)
> 05:11
> :   "Okay, so... wishlist?" (`D2`)
<!-- > 05:16
> :   "Well..." (`D3`) -->
> 05:18
> :   "This is a funny thing to be putting on a wishlist" (`D2`)
> 05:18
> :   "But at least it's not a fire" (`D1`)

The team would not like to apply the standard procedures in place - either of them would be "a funny thing" to be doing. Taking note of this allows a latent primary contradiction to be surfaced. However, no attempt at transformation follows: the resolution seems to be simply inaction, with the item left in the inbox for later. <!-- Is this true? -->

It takes a while for the issue to brew and mature. Five dailies later we find the team discussing an outbox item which presents a similar conundrum. A work item appears which, paradoxically, will not need doing nor priorisation through wishlist until an additional external trigger.

#### Daily 14, `OUTBOX`

> 21:33
> :   "I guess wishlist or something would be appropriate?" (The presented alternative is rejected by silence.<!-- Is this true? -->)
> 22:05
> :   "Has it been through inbox?"
> :   "No. It's because that doesn't need to be done."

> 27:15
> :   "-- it's pending a project.. There's no case"
> :   "Can we throw this to [a release cycle]?"
> :   "No, we won't be doing it"

This time, instead of being satisfied with their declaration of an item being unfit for the apparent categories, the team does attempt to model the situation such that a suitable place could be found. The team's action demonstrates the existence and attempted resolution of a secondary contradiction, which however goes as unresolved as the previous primary contradiction.

#### Daily 15, `FIRES`

> 29:05
> :   "So how many weeks until we need this?"
> 29:13
> :   "Is this like a non-core, pending for project thing?"
> 29:28
> :   "Why not move this to one of the releases for composer? [..]"
> 29:50
> :   "Do we have a project for [client]? Can it be there?"
> 30:40
> :   "Isn't it kind of priority lane? It's a customer need"
> 31:20
> :   "We should have a box, let's call it 'moneybox'"

The work item depends on an external party, but is not impeded. It is done for a client but the scope is the whole product platform. And it's a technical customer need, but doesn't need to be resolved immediately.

#### Daily 16, `OUTBOX`

> 37:50
> :   "Do we some kind of list or ability to make a list of stuff that's not in supersonic but should be? Because that's a project"
> :   "No"
> :   "But do we have the ability to make a list? Do we even know what these things are?"
> 39:20
> :   "Where's the project?"
> :   "Would you like me to make one now?"
> :   "Wouldn't it make sense?"
> 39:35
> :   "What's the theme called?"
> :   "Couldn't we have like 'module core' or something?"

#### Daily 17, `MONEYBOX`

> 43:30
> :   "These are old things"
> :   "Let's shovel them somewhere so it says 'old things'"
> :   "Can we put the label 'longstanding'?"
> :   "Waiting for money? Money required?"
> :   "We need an inbox here"

#### Daily 18, `INBOX`

> 25:45
> :   "You know better what needs to be done, but we need to be building a platform"
> :   "So we put this in the module backlog, but under a different description... or, wishlist, or..?"
> :   "What?"
> :   "What do we do?"
> :   "If there's a supersonic-and-frontend backlog"
> :   "I don't think so"
> :   "I don't know what we should do but I don't think we should do a task like that"
> 26:25
> :   "Hey, this is a module core thing, right?"


#### Daily 18, `OUTBOX`

> 35:45
> :   "So this is done?"
> :   "This is still an issue for this single app"
> :   "Should we have some kind of what-the-fuck box? Or do we have a project called what the fuck?"
> 36:15
> :   "Should we have a WATBOX? Because we have so many things that are not..."
> :   "That we can leave there and go them through like once a month. Watbox goes next to moneybox."

#### Daily 19, `INBOX`

> 15:00
> :   "So it's missing a case"
> 16:50
> :   "I don't think this is a moneybox issue"
> :   "I thought the moneybox function is that ... there are cases already"
> :   "No, but there have been indications already, this is an imaginary feature, and now we are waiting for somebody to say 'we will pay x amount'..."

+ there's a new MARKETING (inbox?) where they will shovel and prioritize their top 10 things instead of having them hang around in wishlist where we can't act on them appropriately anyways

> 19:45
> :   "Marketing will read all the items in the wishlist and put them in... marketing?"
> :   "Yes, we have this very very long wishlist. I went this through with Marko and Harri that [Marketing] will go through all the items and put them to [marketing]... they'll get a top 10 priority and the rest is still wishlist... when there's top10 we can maybe take one off [the top]"
> :   "So, outbox, longstanding"
> :   "yeah, we need to see that this is ... [done]"

> 23:05
> :   "What if we implement that users can actually remove their accounts?... No they cannot and it's a huge overhead that we mail them back to verify"
> :   "Yes, huge amounts of waste"
> :   "But... if it's not a fire then what the fuck is it and it's done if ever..."
> :   "Could we have a state between these cycles and fires? Because currently if it's not a fire and it's not..."
> :   "We could have a cloud continuum but no-one would ever move anything"
> :   "Exactly. This kind of state that would be like the top ten of our input"
> :   "Isn't priority lane..."
> :   "Yeah but priotity lane means we are doing it"
> :   "So let's make a tech lane then"
> :   "I think we should have this. Each group has their own wishlist, top 10"
> :   "We see that this is a huge waste. But we can't go and blindly implement everything."
> :   "Wouldn't this actually go to the marketing top ten?"
> 25:00
> :   "I made a wishing well for us and this can go there."
> :   "To where? The tech wishing well that is right below marketing"
> 25:40
> :   "Ok, this was a good improvement"
=> creation of tech wishing well

> 26:10
> :   "And: this is horrible, so instead of shoveling this to wishlist, put this to the newly created wishing well? Just to try this out."
> 27:40
> :   "So, when do we do this? Wishlist?"
> :   "Wishing well, not wishlist"
> :   "Isn't this a wishlist thing?"
> :   "We are working on those right now, the push notifications"
> 28:40
> :   "It would be very very nice for testing."
> :   "Yes, would be very very nice for testing, can we put this to wishing well? Let's see if everything gets put to wishing well, let's see how this works out!"
> :   "I think everything we create is going to wishing well"
> :   "Exactly ... this is how the world works"

#### Daily 19, `MONEYBOX`

> 45:33
> :   "Nothing new."

#### Daily 19, `WATBOX`

> 45:37
> :   "Watbox doesn't need to [be gone] through"
> :   "Nothing. Maybe we should move watbox out"
> :   "Exactly"
> :   "I'm moving it next to 'hard and scary'"

#### Daily 19, `MARKETING BOX`

> 46:20
> :   "Is marketing already updated? Yep, it's just my placeholders..."

#### Daily 19, `NON-CORE MODULE CONTINUUM`

> 46:33
> :   "Should we move tech wishing well elsewhere as well? If we don't want to go through it here. Moving it next to WATBOX."


#### Daily 20, `INBOX`

> 08:40
> :   "This is the tech wishing well?"
> :   "Yeah, because it was the middle stage between wishlist and fire"

> 19:35
> :   "So this goes to wishlist I guess"
> :   "Isn't this about having centralized signout or something?"
> :   "Yes but there's no business value in web so this should go to wishlist..."
> :   "Maybe this goes into the tech wishing well?"
> :   "Yes"
