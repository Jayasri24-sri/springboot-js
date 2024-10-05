package com.example.js.repository;

import com.example.js.model.Employee;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface EmployeeRepository extends MongoRepository <Employee, String>{
        }
