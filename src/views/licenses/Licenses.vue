<!--
 * @Author: Jin
 * @Date: 2020-11-20 20:51:04
 * @LastEditors: Jin
 * @LastEditTime: 2020-11-20 21:10:13
 * @FilePath: /final-assignment/src/views/licenses/Licenses.vue
-->
<template>
    <section class="licenses">
        <v-responsive class="mx-auto body-1" style="max-width: 1280px;">
            <v-container>
                <h1 class="text-h4 mb-1">Licenses</h1>
                <v-divider class="my-6"></v-divider>

                <h2 class="mb-8">Personal Use</h2>
                <p>
                    Digital products purchased under the Standard License may be
                    used one time in an End Product for Personal Use (an End
                    Product that does not charge End Users).
                </p>
                <h2 class="mb-8">Commercial Use</h2>
                <p>
                    Digital products purchased under the Extended License may be
                    used an unlimited amount of times for Personal Use, and one
                    time to create a single End Product that does charge End
                    Users.
                </p>
                <h2 class="mb-8">Unlimited Use</h2>
                <p>
                    An Unlimited License can be used an unlimited amount of
                    times for Personal Use, Commercial Use, and Commercial End
                    Products.
                </p>
                  <v-data-table
                    :headers="[ { text: 'License', value: 'license' }, { text: 'Personal Use', value: 'personal-use' }, { text: 'Commercial Use', value: 'commercial-use' } ]"
                    :items="[
                        { license: 'Personal Use', 'personal-use': '1 Project', 'commercial-use': 'Not Applicable' },
                        { license: 'Extended Use', 'personal-use': 'Unlimited', 'commercial-use': '1 Project' },
                        { license: 'Unlimited Use', 'personal-use': 'Unlimited', 'commercial-use': 'Unlimited' }
                    ]"
                    class="mb-6"
                    rounded
                    disable-pagination
                    disable-filtering
                    disable-sort
                    hide-default-footer
                ></v-data-table>

                <h2 class="mb-8">General FAQ</h2>
                <h2 class="mb-8">
                    Can I use a purchased item in a freelance project or
                    contract work for a client?
                </h2>
                <p>
                    Yes. However, if the client intends to charge End Users in
                    any way from the End Product you create, you will need to
                    purchase an Extended License. If you create the End Product
                    for a client, your rights to purchased Items are transferred
                    from you to your client.
                </p>
                <h2 class="mb-8">What is an End Product?</h2>
                <p>
                    An End Product is work that is designed or developed for a
                    single, paid client. This website can not be resold as a
                    product to multiple users. For more information on selling
                    products to multiple users.
                </p>
                <h2 class="mb-8">What are the End Product requirements?</h2>
                <p>
                    An End Product must be a unique implementation of the Item,
                    often requiring limited copy and content changes. For
                    example, if you purchase a resume template, you may use the
                    Item for yourself or a client after having input personal
                    information (you may not resell it as stock). You cannot use
                    the templates to create derivative products like other
                    templates, themes, page builders, or anything else where you
                    would be repackaging and redistributing the template for
                    someone else to use to build their own sites.
                </p>
                <h2 class="mb-8">
                    What is Personal Use, Commerical Work, Contracted Work,
                    Client Work, etc.?
                </h2>
                <p>
                    If the created site can not charge users in any way, it is
                    considered for Personal Use and a Regular License can be
                    used. For End Products that can charge users, such as a
                    Software as a Service application, or an e-commerce site,
                    you should use an Extended License. For any End Products
                    that will be sold in its entirety, such as creating software
                    that is distributed digitally, use an Unlimited License.
                </p>
                <h2 class="mb-8">What is Personal Use?</h2>
                <p>
                    A Personal Use License can only be used for 1 End Product
                    that does not charge users in any way.
                </p>
                <h2 class="mb-8">What is Commerical Use?</h2>
                <p>
                    A Commercial Use License can only be used for 1 End Product
                    that charges or will charge users.
                </p>
                <h2 class="mb-8">What is Unlimited Use?</h2>
                <p>
                    An Extended Use License can be used for any number of
                    Personal and Commercial projects.
                </p>
            </v-container>
        </v-responsive>
    </section>
</template>

<style scoped>
.v-application p {
    margin-bottom: 32px;
}

.theme--light.v-data-table {
    background-color: #fff;
    color: rgba(0,0,0,.87);
}

.theme--dark.v-data-table {
    background-color: #05090c;
    color: #edf0f2;
}
</style>
