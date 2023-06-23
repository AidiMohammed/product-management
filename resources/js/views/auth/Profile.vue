<template lang="">
    <Loding v-if="loding"/>
    <div v-else class="content-wrapper">
        <div v-if="user" class="container-fluid">

            <div class="row mt-5">
                <div class="col-lg-8 mx-lg-auto">
                    <div class="card">
                    <div class="card-body">
                    <ul class="nav nav-tabs nav-tabs-primary top-icon nav-justified">
                        <li class="nav-item">
                            <a href="javascript:void();" data-target="#profile" data-toggle="pill" class="nav-link active"><i class="icon-user"></i> <span class="hidden-xs">Profile</span></a>
                        </li>
                        <li class="nav-item">
                            <a href="javascript:void();" data-target="#edit" data-toggle="pill" class="nav-link"><i class="icon-note"></i> <span class="hidden-xs">Edit</span></a>
                        </li>
                    </ul>
                    <div class="tab-content p-3">
                        <div class="tab-pane active" id="profile">
                            <h5 class="mb-3">User Profile</h5>
                            <div class="row">
                                <div class="col-md-6">
                                    <h6>About</h6>
                                    <p>
                                        {{user.about}}
                                    </p>
                                    <h6>Hobbies</h6>
                                    <p>
                                        {{user.hobbies}}
                                    </p>
                                </div>
                                <div class="col-md-6">
                                    <h6>Recent badges</h6>
                                    <a href="javascript:void();" class="badge badge-dark badge-pill">html5</a>
                                    <a href="javascript:void();" class="badge badge-dark badge-pill">react</a>
                                    <a href="javascript:void();" class="badge badge-dark badge-pill">codeply</a>
                                    <a href="javascript:void();" class="badge badge-dark badge-pill">angularjs</a>
                                    <a href="javascript:void();" class="badge badge-dark badge-pill">css3</a>
                                    <a href="javascript:void();" class="badge badge-dark badge-pill">jquery</a>
                                    <a href="javascript:void();" class="badge badge-dark badge-pill">bootstrap</a>
                                    <a href="javascript:void();" class="badge badge-dark badge-pill">responsive-design</a>
                                    <hr>
                                    <span class="badge badge-primary"><i class="fa fa-user"></i> 900 Followers</span>
                                    <span class="badge badge-success"><i class="fa fa-cog"></i> 43 Forks</span>
                                    <span class="badge badge-danger"><i class="fa fa-eye"></i> 245 Views</span>
                                </div>
                                <div class="col-md-12">
                                    <h5 class="mt-2 mb-3"><span class="fa fa-clock-o ion-clock float-right"></span> Recent Activity</h5>
                                    <div class="table-responsive">
                                    <table class="table table-hover table-striped">
                                        <tbody>                                    
                                            <tr>
                                                <td>
                                                    <strong>Abby</strong> joined ACME Project Team in <strong>`Collaboration`</strong>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <strong>Gary</strong> deleted My Board1 in <strong>`Discussions`</strong>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <strong>Kensington</strong> deleted MyBoard3 in <strong>`Discussions`</strong>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <strong>John</strong> deleted My Board1 in <strong>`Discussions`</strong>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <strong>Skell</strong> deleted his post Look at Why this is.. in <strong>`Discussions`</strong>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                </div>
                            </div>
                            <!--/row-->
                        </div>
                        <div class="tab-pane" id="edit">
                            <form @submit.prevent="update(user)">
                                <div class="form-group row">
                                    <label class="col-lg-3 col-form-label form-control-label">First name *</label>
                                    <div class="col-lg-9">
                                        <input v-model="user.name" class="form-control" type="text" required>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label class="col-lg-3 col-form-label form-control-label">Last name</label>
                                    <div class="col-lg-9">
                                        <input v-model="user.last_name" class="form-control" type="text" >
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label class="col-lg-3 col-form-label form-control-label">Email *</label>
                                    <div class="col-lg-9">
                                        <input v-model="user.email" class="form-control" type="email" required>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label class="col-lg-3 col-form-label form-control-label">Hobbies</label>
                                    <div class="col-lg-9">
                                        <input v-model="user.hobbies" class="form-control" type="text">
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label class="col-lg-3 col-form-label form-control-label">About</label>
                                    <div class="col-lg-9">
                                        <textarea v-model="user.about" class="form-control" id="about" rows="5"></textarea>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label class="col-lg-3 col-form-label form-control-label">Website</label>
                                    <div class="col-lg-9">
                                        <input v-model="user.web_site" class="form-control" type="url" >
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label class="col-lg-3 col-form-label form-control-label">Address</label>
                                    <div class="col-lg-9">
                                        <input v-model="user.street" class="form-control" type="text"  placeholder="Street">
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label class="col-lg-3 col-form-label form-control-label"></label>
                                    <div class="col-lg-6">
                                        <input v-model="user.city" class="form-control" type="text"  placeholder="City">
                                    </div>
                                    <div class="col-lg-3">
                                        <input v-model="user.state" class="form-control" type="text" placeholder="State">
                                    </div>
                                </div>
                            
                                <div class="form-group row">
                                    <label class="col-lg-3 col-form-label form-control-label">Username *</label>
                                    <div class="col-lg-9">
                                        <input v-model="user.user_name" class="form-control" type="text" required>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label class="col-lg-3 col-form-label form-control-label"></label>
                                    <div class="col-lg-9 d-flex justify-content-between">
                                        <input type="submit" class="btn btn-primary" value="Save Changes">
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapGetters,mapActions } from 'vuex';
export default {
    computed:{
        ...mapGetters({'user':'getUser','loding':'getLoding'})
    },
    methods:{
        ...mapActions({'update':'updateProfile'})
    },

}
</script>
<style lang="">
    
</style>